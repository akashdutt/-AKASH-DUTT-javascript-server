export default function successHandler(message: string, data: any): object {
  return {
    id: message,
    name: data,
  };
}
