import { PaymentStatus } from "../enums/payment-status.enum";
import { IPaymentInstituitionResponse } from "./payment-instituition.interface";
import { IPaymentTypeResponse } from "./payment-type.interface";

export interface IInstallmentRequest {

}

export interface IInstallmentResponse {
  id: string;
  installment: string;
  value: string;
  paymentDate: Date;
  dateDue: Date;
  paymentStatus: PaymentStatus;
  paymentInstituition: IPaymentInstituitionResponse;
  paymentType: IPaymentTypeResponse;
}
