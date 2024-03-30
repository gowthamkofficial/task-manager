import { AbstractControl, ValidationErrors } from '@angular/forms';

export const APP_VARIABLES = {
  validators: {
    image: /(.*?)\.(jpg|jpeg|png|bmp|jfif)$/,
    integer: /^-?(0|[1-9]\d*)?$/,
    removebmp: /(.*?)\.(jpg|jpeg|png|jfif)$/,
    allowOnlyPlusValue: /^[0-9]\d*$/,
    decimalTwoDigitOnly: /^\d{1,1000}(\.\d{1,2})?$/, // allows plus value and two digit
    decimalThreeDigitOnly: /^\d{1,1000}(\.\d{1,3})?$/, // allows plus value and two digit
    decimal: /^\-?(\d+\.?\d*|\d*\.?\d+)$/, // allows + or - values
    sixDigitInteger: /^[0-9]{6}$/,
    tenDigitInteger: /^[0-9]{10}$/,
    aadharNo: /^[0-9]{12}$/,
    alphaNumeric: /^[0-9a-zA-Z]+$/, // RSDFS3454fgfet
    lettersOnly: /^[A-Za-z]+$/, // ABCabcRtvd
    imageAndPdf: /(.*?)\.(jpg|jpeg|png|bmp|pdf)$/,
    imagesAndPdf: /(.*?)\.(jpg|jpeg|png|pdf)$/,
    Pdf: /(.*?)\.(pdf)$/,
    PdfExcel: /(.*?)\.(pdf|msexcel|csv)$/,
    emailPattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    removeWhitespace: /^[^ ][\w\W ]*[^ ]/,
    mobilenumber: /^[6,7,8,9]{1}[0-9]{9}$/,
    removeWSWLetter: /^\S$|^\S[\s\S]*\S$/, // remove white space prefix, suffix and center of the letters
    numberOnly: '^[0-9]*$',
    Minpasswordlength: /(?=.*\d)(?=.*[0-9]).{6,}/,
    date: /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/,
  },
};
export class WhiteSpaceValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
}

export function checkNull(data) {
  return data != null && data != undefined && data != '';
}
