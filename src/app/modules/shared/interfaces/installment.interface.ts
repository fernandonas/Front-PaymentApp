import { PaymentStatus } from "../enums/payment-status.enum";
import { IPaymentInstituitionResponse } from "./payment-instituition.interface";
import { IPaymentTypeResponse } from "./payment-type.interface";

export interface IInstallmentRequest {

}

export interface IInstallmentResponse {
  parcela: string;
  valorparcela: string;
  dataPagamento: Date;
  dataVencimento: Date;
  parcelaPaymentStatus: PaymentStatus;
  paymentInstituition: IPaymentInstituitionResponse;
  paymentType: IPaymentTypeResponse;
}
