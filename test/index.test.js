import { foo } from '../src/index.js';

describe('foo', () => {
	it('should be defined', () => {
		expect(foo).toBeDefined();
	});
});
