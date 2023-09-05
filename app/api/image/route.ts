import { checkApiLimit, incrementApiLimit } from '@/lib/api-limits';
import { checkSubscription } from '@/lib/subscription';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN!,
});

export async function POST(req: Request )  {

  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

   
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }
    
    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if(!freeTrial && !isPro){
      return new NextResponse("Free trial has expired.", {status: 403})
    }

    const output = await replicate.run(
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      {
        input: {
          prompt,
        },
      },
    );

    if(!isPro){
      await incrementApiLimit()
    }

    return NextResponse.json(output);
  } catch (error: any) {
    console.log("[IMAGE_ERROR]",error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};


