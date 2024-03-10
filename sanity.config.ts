/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { media } from 'sanity-plugin-media'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { muxInput } from 'sanity-plugin-mux-input'
import { structure } from './studio/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './studio/env'
import {schema} from './studio/schemas'
import { Logo } from './studio/components/logo'

// const {theme} = (await import(
//   // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
//   'https://themer.sanity.build/api/hues?default=4a4a4a;400;lightest:ffffff;darkest:111111&primary=4a4a4a;600;darkest:2b2b2b&transparent=a1a1a1'
// )) as {theme: import('sanity').StudioTheme}


export default defineConfig({
  title: 'Mason',
  icon: Logo,
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({defaultApiVersion: apiVersion}),
    media(),
    muxInput(),
    vercelDeployTool
  ],
  // theme
})
