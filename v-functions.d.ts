declare module 'v-functions' {
  const functions: {
    getDecodeStorage: (key: string) => string | null;
    setEncodeStorage: (key: string, value: string) => void;
  };

  export default functions;
}
