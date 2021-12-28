import { get_content_type } from "./get_content_type.ts";

import { Status } from "https://deno.land/std@0.119.0/http/http_status.ts";

import { readableStreamFromReader } from "https://deno.land/std@0.119.0/streams/conversion.ts";





export async function serve_file_as_ReadableStream(path : string) : Promise<Response>
{
  const content_type = get_content_type(path);

  if (content_type == undefined)
  {
    return (new Response(null, {
      status: Status.InternalServerError
    }));
  }
  else
  {
    const headers = new Headers();

    headers.set("content-type", content_type!);

    const file = await Deno.open(path);

    const body = readableStreamFromReader(file); // Idea gotten from @lcasdev#5764 on Discord.

    // Deno.close(file.rid); // Not necessary; ``readableStreamFromReader`` does it already (at least up to "std@0.119.0").

    const response = new Response(body, { status: Status.OK, headers });

    return (response);
  }
}