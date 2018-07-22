import { Directive, Input, TemplateRef, ViewContainerRef, NgZone } from '@angular/core';
import { AppConfig }  from '../../app.config';

@Directive({
  selector: '[ifViewportSize]'
})
export class ViewportSizeDirective {
  private hasView = false;
  inputSize;
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _ngZone:NgZone,
    private config: AppConfig
  ) { 
  }
  

  @Input() set ifViewportSize(inputSize: string) {
    this.inputSize  = inputSize.slice(0,inputSize.length);
    this.renderEl();
    this._ngZone.runOutsideAngular(()=>{
        window.addEventListener('resize',this.renderEl.bind(this))
    })
  }

  renderEl(){
    if( 
        (this.inputSize == 'small' && (window.innerWidth < Number(this.config.getConfig('medium')))) ||
        (this.inputSize == 'medium' && (Number(this.config.getConfig('medium')) <= window.innerWidth) &&(window.innerWidth < Number(this.config.getConfig('large')))) ||
        (this.inputSize == 'large' && (Number(this.config.getConfig('large')) <= window.innerWidth))
      ){
        if(!this.hasView) this._viewContainer.createEmbeddedView(this._templateRef);
        this.hasView = true;
      }else{
        this._viewContainer.clear();
        this.hasView = false;
      }
  }

}
