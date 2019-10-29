import { Component, OnInit } from '@angular/core';

export interface IWord {
  key: string;
  meaning: string;
}

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {
  private listWord: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'}
  ];

  private word: IWord;

  constructor() { }

  ngOnInit() {}

}
