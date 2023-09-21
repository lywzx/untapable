import { Hook } from 'tapable';

/**
 * add unhook to tapable
 * @param hook
 * @param tap
 */
export function unTap(hook: Hook<any, any>, tap: string | Function) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  hook._resetCompilation();
  hook.taps = hook.taps.filter((i) => {
    if (typeof tap === 'string' && i.name === tap) {
      return false;
    } else if (typeof tap === 'function' && i.fn === tap) {
      return false;
    }
    return true;
  });
}
