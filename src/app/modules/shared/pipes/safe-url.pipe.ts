import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafePipeUrl implements PipeTransform {

  constructor(private readonly sanitized: DomSanitizer) { }
  transform(value: any): any {
    return this.sanitized.bypassSecurityTrustUrl(value);
  }

}
