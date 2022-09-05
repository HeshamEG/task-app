import {  cleanup, renderHook } from '@testing-library/react';
import useCsvFileGenerator from '../generateFiles.helper'
import {data} from './products';

describe('files generator helper', () => {
  afterEach(cleanup);

  test('test generate1stFileData average quantity 1st item :', () => {
    const { result } = renderHook(() => useCsvFileGenerator());
    const { generate1stFileData } = result.current;

    expect(generate1stFileData(data)[0]['average quantity']).toBe(2)
  });

  test('test generate1stFileData item name 1st item :', () => {
    const { result } = renderHook(() => useCsvFileGenerator());
    const { generate1stFileData } = result.current;

    expect(generate1stFileData(data)[0]['name']).toBe('shoes');
  });

  test('test generate2ndFileData item name 1st item :', () => {
    const { result } = renderHook(() => useCsvFileGenerator());
    const { generate2ndFileData , csvFileToArray } = result.current;

    expect(generate2ndFileData(data)[0]['name']).toBe('shoes');
    
  });

  test('test generate2ndFileData 2nd item popular brand :', () => {
    const { result } = renderHook(() => useCsvFileGenerator());
    const {  generate2ndFileData } = result.current;

    expect(generate2ndFileData(data)[0]['popular brand']).toBe('Air')
  });
});

