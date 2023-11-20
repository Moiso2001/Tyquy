export type FormType = {
    first: {
      nombre: string;
      celular: string;
      correo: string;
      direccion: string;
    }
    second: {
      info: {
          id: string;
          name: string;
          raza: string;
          edad: string;
          peso: string;
      }[];
      photos: never[];
    }
    third: {nombre:string, tipo: string}
    receipt: {
        total: number;
        title: string;
        dogs: {
          line: string;
          price: number;
        }[];
    }
  }