import { convertBytesToMegabytes } from './convertBytesToMegabytes';

const requiredMessage = 'Campo requerido';

export const InputValidations = {
  required: (value: string) => (value ? true : requiredMessage),
  maxlength: (value: string, maxlength: number) =>
    value.length > maxlength ? `Máximo ${maxlength} caracteres` : true,
  minlength: (value: string, maxlength: number) =>
    value.length < maxlength ? `Minimo ${maxlength} caracteres` : true,
  email: (value: string) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value) ? true : 'Formato de Correo eléctronico inválido';
  },
  trim: (value: string) =>
    value[0] == ' ' || value[value.length - 1] == ' '
      ? 'No se aceptan espacios en blanco al inicio y al final'
      : true,
  url: (value: string) => {
    const regex = new RegExp(
      '^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    );

    return regex.test(value) ? true : 'Direción del sitio web inválida';
  },

  maxSize: (value: File, maxlengthInMegaBytes: number) =>
    value.size > convertBytesToMegabytes(maxlengthInMegaBytes)
      ? `Máximo de ${maxlengthInMegaBytes} megabytes`
      : true,
};
