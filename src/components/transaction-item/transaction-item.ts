import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the TransactionItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transaction-item',
  templateUrl: 'transaction-item.html'
})
export class TransactionItemComponent {

  @Input(`data`) _transaction: any;
  @Input(`isFlag`) _isFlag: boolean;
  @Output() onApprove: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  private approve() {
    this.onApprove.emit({
      transaction: this._transaction,
      point: 5
    });
  }

  private flag() {

  }

}
