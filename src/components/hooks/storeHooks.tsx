import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import { AppDispatch, Rootstate } from '../../store/store'

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector