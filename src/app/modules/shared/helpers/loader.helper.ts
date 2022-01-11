export class LoaderHelper {
    loading = false;

    enable(): void {
        this.loading = true;
    }

    disable(): void {
        this.loading = false;
    }

    handle(): void {
        this.loading = !this.loading;
    }

    status(): boolean {
        return this.loading;
    }
}
