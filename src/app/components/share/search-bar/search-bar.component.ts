import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
/* import { SearchModel } from '../../../models/search.model';
import { ShareService } from '../../../services/share.service'; */


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  inputs: ['searchInfo']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;
  search: FormControl;
  searchInfo;
  isOpen: boolean = false;
  showSearch: boolean = false;
  timestamp = Date.now();

  constructor(
    private _fb: FormBuilder,
    //private _share: ShareService,
    private _elementRef: ElementRef
  ) {

  }

  onSubmit(value?){ 
    this.isOpen = false;
    if(this.search.valid)  this.searchInfo.callBack(value? value : this.search.value);
  }

  ngOnInit() {
    if(this.searchInfo && this.timestamp) this.gotSearchInfo();
  }

  gotSearchInfo(){  
    this.showSearch = true;
    if(this.searchInfo.isFocus) setTimeout(()=>{
      this._elementRef.nativeElement.querySelector('#inputsearchbar'+ this.timestamp).focus();
    },100)
    
    if(this.searchInfo && this.searchInfo['validation']){
      this.search = this._fb.control('', this.searchInfo.validation);
    }else{
      this.search = this._fb.control('');
    }
      
    this.searchForm = this._fb.group({
      search: this.search
    });

    if(this.searchInfo) this.search.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(newValue => {
            if(this.search.valid && newValue && newValue.trim()) {
              let nValue = newValue.trim();
              this.searchInfo.midCallBack(nValue);
              this.isOpen = true;
            }else if(!newValue){
              this.onReset();
            }
        })
    
  }

  onReset(){
    this.search.reset();
    this.searchInfo.result = '';
    this.isOpen = false;
    this.onSubmit('');
  }

}
