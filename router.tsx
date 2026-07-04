import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { HomeScreen } from './screens/HomeScreen'
import { SettingsScreen } from './screens/Settings'
// Storybook
import { LibraryScreen } from './screens/Library'
import { SetupScreen } from './screens/SetupScreen'
import { CharacterDesignScreen } from './screens/CharacterDesignScreen'
import { BookDetailsScreen } from './screens/BookDetailsScreen'
import { ScriptEditorScreen } from './screens/ScriptEditorScreen'
import { ImageStudioScreen } from './screens/ImageStudioScreen'
import { ExportScreen } from './screens/ExportScreen'
// Coloring Book
import { ColoringLibraryScreen } from './screens/ColoringLibrary'
import { ColoringSetupScreen } from './screens/ColoringSetupScreen'
import { ColoringDetailsScreen } from './screens/ColoringDetailsScreen'
import { ColoringStoryScreen } from './screens/ColoringStoryScreen'

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      // Home
      { path: '/', element: <HomeScreen /> },
      { path: '/settings', element: <SettingsScreen /> },

      // Storybook product
      { path: '/storybook', element: <LibraryScreen /> },
      { path: '/storybook/setup', element: <SetupScreen /> },
      { path: '/storybook/:bookId/character', element: <CharacterDesignScreen /> },
      { path: '/storybook/:bookId/details', element: <BookDetailsScreen /> },
      { path: '/storybook/:bookId/script', element: <ScriptEditorScreen /> },
      { path: '/storybook/:bookId/images', element: <ImageStudioScreen /> },
      { path: '/storybook/:bookId/export', element: <ExportScreen /> },

      // Coloring Book product
      { path: '/coloring-book', element: <ColoringLibraryScreen /> },
      { path: '/coloring-book/setup', element: <ColoringSetupScreen /> },
      { path: '/coloring-book/:bookId/details', element: <ColoringDetailsScreen /> },
      { path: '/coloring-book/:bookId/story', element: <ColoringStoryScreen /> },
      // Coloring books reuse ImageStudio and Export — they check book.productType
      { path: '/coloring-book/:bookId/images', element: <ImageStudioScreen /> },
      { path: '/coloring-book/:bookId/export', element: <ExportScreen /> },

      // Legacy "pages" tab → the image studio
      { path: '/coloring-book/:bookId/pages', element: <ImageStudioScreen /> },
      { path: '/storybook/:bookId/pages', element: <ImageStudioScreen /> },

      // Catch-all: send any unknown URL back home instead of crashing
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
