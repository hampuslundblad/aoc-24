export async function readFile(filePath: string): Promise<string> {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(filePath);
  return decoder.decode(data);
}
