import { Pipe, PipeTransform } from '@angular/core';
import { DataType } from '../task';

@Pipe({
  name: 'dataType'
})
export class DataTypePipe implements PipeTransform {

  transform(value: DataType): string {
    switch (value) {
      case "FILES":
        return "Pliki, foldery, dane sieciowe";
      case "MSSQL":
        return "Bazy danych (MSSQL)";
      case "POSTGRES":
        return "Bazy danych (POSTGRES)";
    }
  }

}
