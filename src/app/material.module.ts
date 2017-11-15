import {NgModule} from "@angular/core";
import {MatIconModule,MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialModule {}
