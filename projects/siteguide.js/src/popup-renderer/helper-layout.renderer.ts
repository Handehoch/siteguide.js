import { TourStep } from '../tour-step';
import { getPositionType } from '../utils/is-fixed.util';
import { IRenderer } from './interfaces/renderer.interface';

export class HelperLayoutRenderer implements IRenderer {
    public render(helper: HTMLElement, step: TourStep): void {
        helper.style.position = getPositionType(step.hostElement!);
        this.updatePosition(helper, step);
    }

    public updatePosition(helper: HTMLElement, step: TourStep): void {
        const rect: DOMRect = step.hostElement!.getBoundingClientRect();
        const paddingX: number = 8;
        const paddingY: number = 8;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        helper.style.left = `${rect.left - paddingX}px`;
        helper.style.top = `${rect.top + scrollTop - paddingY}px`;
        helper.style.width = `${rect.width + 2 * paddingX}px`;
        helper.style.height = `${rect.height + 2 * paddingY}px`;
    }
}
