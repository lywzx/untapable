import { SyncHook } from 'tapable';
import { unTap } from '../src';
import { fake } from 'sinon';
import { expect } from 'chai';

describe('test unTap is correct', function () {
  it('should eq', function () {
    const syncHook = new SyncHook<[string]>(['unTap']);

    const fn1 = fake();
    syncHook.tap('fn1', fn1);
    syncHook.call('first');

    const fn2 = fake();
    syncHook.tap('fn2', fn2);
    syncHook.call('second');

    expect(fn1.calledTwice).to.be.true;
    expect(fn2.calledOnce).to.be.true;
    unTap(syncHook, fn1);
    syncHook.call('third');
    expect(fn1.calledTwice).to.be.true;
    expect(fn2.calledTwice).to.be.true;

    unTap(syncHook, 'fn2');
    syncHook.call('four');
    expect(fn1.calledTwice).to.be.true;
    expect(fn2.calledTwice).to.be.true;
  });
});
