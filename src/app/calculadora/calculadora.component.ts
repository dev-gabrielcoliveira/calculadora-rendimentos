import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit
{

  protected valorInicial: number = 0;
  protected aporteMensal: number = 0;
  protected taxaAnual: number = 0;
  protected periodoMeses: number = 0;
  protected montanteFuturo: number = 0;
  protected meuFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {
    this.meuFormulario = this.formBuilder.group({
      valorInicial: [0],
      aporteMensal: [0],
      taxaAnual: [0],
      periodoMeses: [0]
    });
  }

  ngOnInit(): void
  {}

  calcularMontanteFuturo(): void
  {

    const taxaMensal = (this.taxaAnual/ 12 );
    this.montanteFuturo = this.valorInicial;

    for (let i = 0; i < this.periodoMeses; i++)
    {
      this.montanteFuturo = (this.montanteFuturo * (1 + (taxaMensal/100)));
      this.montanteFuturo += this.aporteMensal;
    }

  }

}
