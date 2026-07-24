import type { Chapter, ChapterMeta } from '../../types';

export function makeStub(meta: ChapterMeta): Chapter {
  return {
    ...meta,
    quickRecap: meta.learningObjectives,
    sections: [
      {
        id: 'coming-soon',
        heading: meta.title,
        blocks: [
          {
            type: 'callout',
            tone: 'info',
            title: 'Full study content coming shortly',
            text: 'This chapter\'s detailed, visual study material is being authored and will appear here.',
          },
          { type: 'list', items: meta.learningObjectives },
        ],
      },
    ],
  };
}
