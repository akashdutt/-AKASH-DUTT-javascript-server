export default function successHandler(message: string, data: any) {
  return {
    name: message,
    id: data,
  };
}
