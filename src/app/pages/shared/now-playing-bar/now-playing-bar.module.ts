import { FormsModule } from '@angular/forms';
import { NowPlayingBarComponent } from './now-playing-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSliderModule } from 'ng-zorro-antd/slider';


@NgModule({
  declarations: [NowPlayingBarComponent],
  imports: [
    CommonModule,
    NzSliderModule,
    FormsModule
  ],
  exports: [NowPlayingBarComponent]
})
export class NowPlayingBarModule { }
