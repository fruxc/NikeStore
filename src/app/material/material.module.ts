import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MaterialComponent = [MatButtonModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule {}
