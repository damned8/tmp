import { BehaviorSubject, Observable } from "rxjs"

export const SINGLE_ENTITY_ITEM = 0

export interface AsyncTask {
  isLoading: boolean
  isError: boolean
}

export interface ViewModel<Enitity> extends AsyncTask {
  items: Enitity[]
}


export abstract class BaseViewModel<
  ViewModel,
  EnitityModel,
  GetAllPropsModel,
  GetOnePropsModel,
  CreatePropsModel,
  UpdatePropsModel,
  RemovePropsModel,
>  {
  protected viewModel: BehaviorSubject<ViewModel>

  public getAll(props: GetAllPropsModel): void {
    this.startAsynkTask()

    this.getGetAllResource(props).subscribe(
      res => this.processGetAllSuccess(res),
      error => this.processGetAllError(error)
    )
  }

  protected getGetAllResource(props: GetAllPropsModel): Observable<Partial<EnitityModel[]>> {
    throw new Error('Method is not implemented')
  }

  protected processGetAllSuccess(res: EnitityModel[]): void {
    throw new Error('Method is not implemented')
  }

  protected processGetAllError<T>(error: T): void {
    throw new Error('Method is not implemented')
  }

  public getOne(props: GetOnePropsModel): void {
    this.startAsynkTask()

    this.getGetOneResource(props).subscribe(
      res => this.processGetOneSuccess(res),
      error => this.processGetOneError(error)
    )
  }

  protected processGetOneSuccess(res: EnitityModel): void {
    throw new Error('Method is not implemented')
  }

  protected getGetOneResource(props: GetOnePropsModel): Observable<EnitityModel> {
    throw new Error('Method is not implemented')
  }

  protected processGetOneError<T>(error: T): void {
    throw new Error('Method is not implemented')
  }

  public create(props: CreatePropsModel): void {
    this.startAsynkTask()

    this.getCreateResource(props).subscribe(
      res => this.processCreateSuccess(res),
      error => this.processCreateError(error)
    )
  }

  protected getCreateResource(props: CreatePropsModel): Observable<Partial<EnitityModel>> {
    throw new Error('Method is not implemented')
  }

  protected processCreateSuccess(res: Partial<EnitityModel>): void {
    throw new Error('Method is not implemented')
  }

  protected processCreateError<T>(error: T): void {
    throw new Error('Method is not implemented')
  }

  public update(props: UpdatePropsModel): void {
    this.startAsynkTask()

    this.getUpdateResource(props).subscribe(
      res => this.processUpdateSuccess(res),
      error => this.processUpdateError(error)
    )
  }

  protected getUpdateResource(props: UpdatePropsModel): Observable<Partial<EnitityModel>> {
    throw new Error('Method is not implemented')
  }

  protected processUpdateSuccess(res: Partial<EnitityModel>): void {
    throw new Error('Method is not implemented')
  }

  protected processUpdateError<T>(error: T): void {
    throw new Error('Method is not implemented')
  }

  public remove(props: RemovePropsModel): void {
    this.startAsynkTask()

    this.getRemoveResource(props).subscribe(
      res => this.processRemoveSuccess(res),
      error => this.processRemoveError(error)
    )
  }

  protected getRemoveResource(props: RemovePropsModel): Observable<Partial<EnitityModel>> {
    throw new Error('Method is not implemented')
  }

  protected processRemoveSuccess(res: Partial<EnitityModel>): void {
    throw new Error('Method is not implemented')
  }

  protected processRemoveError<T>(error: T): void {
    throw new Error('Method is not implemented')
  }

  protected startAsynkTask(): void {
    const nextState = { ...this.viewModel.value, isLoading: true, error: false }
    this.viewModel.next(nextState)
  }

}
