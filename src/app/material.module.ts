import {NgModule} from "@angular/core";
import {MatIconModule,MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
  MatGridListModule,
  MatRadioModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialModule {}
