export default function successHandler(message: string, data: any) {
  return {
    id: data,
    name: message,
  };
}
