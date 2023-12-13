import { createContext } from 'react'

import {IExtractContext} from './interfaces/IExtractContext'

export const ExtractContext = createContext<IExtractContext>({extract: []})
