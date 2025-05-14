import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatosService } from '../candidatos.service';
import { CandidatosDetail } from '../candidatos-detail';

@Component({
  selector: 'app-candidatos-detail',
  standalone: false,
  templateUrl: './candidatos-detail.component.html',
  styleUrl: './candidatos-detail.component.css'
})
export class CandidatosDetailComponent implements OnInit {
  @Input() candidatosDetail!: CandidatosDetail;

  constructor(
    private route: ActivatedRoute,
    private candidatosService: CandidatosService
  ) {}

  getCandidato(){
    this.candidatosService.getCandidato(this.candidatoId).subscribe(apiData => {
      this.candidatosDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.candidatosDetail === undefined){
      this.candidatoId = this.route.snapshot.paramMap.get('id')!
      if (this.candidatoId) {
        this.getCandidato();
      }
    }
  }
}
