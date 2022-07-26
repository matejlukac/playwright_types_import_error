import {
    test
} from '@playwright/experimental-ct-react';
import React from 'react';
import type { Node } from '@react-types/shared'

let a: Node<any>;

test.describe('Popover', () => {
    test('closes and opens on button click', async ({ mount, page }) => {
        await mount(<div>TEST</div>);
    });
});
