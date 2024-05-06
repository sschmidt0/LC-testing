import { act, renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('Confirmation dialog hook', () => {
  describe('useConfirmationDialog', () => {
    const emptyItem: Lookup = { id: '', name: '' };
    const item: Lookup = { id: 'irrelevant-id', name: 'some name' };

    it('should return isOpen as false', () => {
      const { result } = renderHook(() => useConfirmationDialog());

      expect(result.current.isOpen).toBe(false);
    });

    it('should return empty item as itemToDelete', () => {
      const { result } = renderHook(() => useConfirmationDialog());

      expect(result.current.itemToDelete).toEqual(emptyItem);
    });

    it('should return isOpen as false when onClose is called', () => {
      const { result } = renderHook(() => useConfirmationDialog());

      result.current.isOpen = true;
      expect(result.current.isOpen).toBe(true);

      act(() => {
        result.current.onOpenDialog(item);
        result.current.onClose();
      });

      expect(result.current.isOpen).toBe(false);
    });

    it('should set itemToDelete when dialog is opened', () => {
      const { result } = renderHook(() => useConfirmationDialog());

      expect(result.current.itemToDelete).toEqual(emptyItem);

      act(() => {
        result.current.onOpenDialog(item);
      });

      expect(result.current.itemToDelete).toEqual(item);
    });

    it('should reset itemToDelete to empty object when onAccept is called', () => {
      const { result } = renderHook(() => useConfirmationDialog());

      act(() => {
        result.current.onOpenDialog(item);
      });

      expect(result.current.itemToDelete).toEqual(item);

      act(() => {
        result.current.onAccept();
      });

      expect(result.current.itemToDelete).toEqual(emptyItem);
    });
  });
});
