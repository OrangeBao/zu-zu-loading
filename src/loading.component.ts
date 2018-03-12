import { Component, TemplateRef, ViewChild, OnInit, ContentChild } from '@angular/core';
import { LoadingService } from './loading.service';
@Component({
  selector: 'zu-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  host: {
    '[style.display]': "showModal ? 'block' : 'none'"
  }
})
export class LoadingComponent implements OnInit {

  showModal: boolean = false;

  contentTpl: TemplateRef<void>;

  @ViewChild('innerLoadingIcon') innerLoadingIcon: TemplateRef<any>;
  @ContentChild('customLoading') customUrl: TemplateRef<any>;  

  constructor(private loadService: LoadingService) {

  }

  ngOnInit() {
    if (!this.customUrl) {
      this.contentTpl = this.innerLoadingIcon;
    } else {
      this.contentTpl = this.customUrl;
    }
    this.loadService.getMessage().subscribe(data => {
      this.showModal = data;
    });
  }

}
