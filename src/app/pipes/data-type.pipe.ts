import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataType'
})
export class DataTypePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "FILES":
        return "Pliki, foldery, dane sieciowe";
      case "MSSQL":
        return "Bazy danych (MSSQL)";
      case "POSTGRES":
        return "Bazy danych (POSTGRES)";
      default:
        return "";
    }
  }

}
