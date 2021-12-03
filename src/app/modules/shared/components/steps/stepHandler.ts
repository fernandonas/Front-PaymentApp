export interface IStep {
    steps: string[];
    currentStep: number;
    addStep(name: string): void;
    next(): void;
    back(): void;
    showSteps(): string[];
    setCurrentStep(step: number): void;
    getCurrentStep(): number;
}

export class Step implements IStep {
    steps = [];
    currentStep = 0;
    public addStep(name: string): void {
        this.steps.push(name);
    }
    public showSteps(): string[]{
        return this.steps;
    }
    public setCurrentStep(step: number): void {
        this.currentStep = step -1;
    }
    public getCurrentStep(): number {
        return this.currentStep;
    }
    public next(): void {
        if (this.steps.length == this.currentStep + 1){
            return
        }
        this.currentStep++;
    }
    public back(): void {
        if (this.currentStep == 0){
            return
        }
        this.currentStep--;
    }
}