export interface NpmCommands {
  __npmCommand__?: string;
  __pnpmCommand__?: string;
  __yarnCommand__?: string;
  __bunCommand__?: string;
}

export interface UnistNode {
  type: string;
  name?: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  attributes?: Array<{ name: string; value?: unknown }>;
  children?: UnistNode[];
  data?: { meta?: string };
}

export interface UnistTree {
  type: string;
  children: UnistNode[];
}