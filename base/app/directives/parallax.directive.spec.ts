import { ParallaxDirective } from './parallax.directive';
import { ElementRef } from '@angular/core';

describe('ParallaxDirective', () => {
  it('should create an instance', () => {
    const directive = new ParallaxDirective(new ElementRef(new HTMLDivElement()));
    expect(directive).toBeTruthy();
  });
});
