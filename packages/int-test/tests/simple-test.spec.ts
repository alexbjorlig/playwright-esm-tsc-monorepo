
import {expect, test} from '@playwright/test';

import {add} from '@prefix/helper/src/add'


test('Does everything work', () => {
    console.log(`add: ${add()}... `);
    expect(true).toBeTruthy();
});
