import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('project mappers', () => {
  describe('mapProjectFromApiToVm', () => {
    const invalidCases = [undefined, null];
    it.each(invalidCases)(
      'should create an empty project when %p is passed',
      (invalidCase) => {
        expect(mapProjectFromApiToVm(invalidCase)).toEqual({
          id: '',
          name: '',
          externalId: '',
          comments: '',
          isActive: false,
          employees: [],
        });
      }
    );

    it('should map the project correctly if passed as props', () => {
      const projectApi: apiModel.Project = {
        employees: [
          { id: 'employee1', employeeName: 'Employee 1', isAssigned: true },
          { id: 'employee2', employeeName: 'Employee 2' },
        ],
        id: 'irrelevant-id',
        isActive: false,
        name: 'some name',
      };

      const projectVm: viewModel.Project = {
        employees: [
          { id: 'employee1', employeeName: 'Employee 1', isAssigned: true },
          { id: 'employee2', employeeName: 'Employee 2' },
        ],
        id: 'irrelevant-id',
        isActive: false,
        name: 'some name',
      };

      expect(mapProjectFromApiToVm(projectApi)).toEqual(projectVm);
    });
  });
});
