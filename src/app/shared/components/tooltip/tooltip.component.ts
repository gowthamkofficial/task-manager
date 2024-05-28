import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'tool-tip',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatIconModule,MatFormFieldModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnChanges {
  @Input() type: 'info' | 'warn'='warn';
  @Input() message: String = 'Some message';

  ngOnChanges(changes: SimpleChanges): void {}
}
