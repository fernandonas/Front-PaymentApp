export class LoaderHelper {
    private loading = false;

    public enable(): void {
        this.loading = true;
    }

    public disable(): void {
        this.loading = false;
    }

    public handleLoader(): void {
        this.loading = !this.loading;
    }

    public status(): boolean {
        return this.loading;
    }
}
