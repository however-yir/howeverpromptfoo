import { Button } from '@app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@app/components/ui/dialog';
import { cn } from '@app/lib/utils';
import { BookOpen, Bug, Calendar, ExternalLink, GitBranch, MessageCircle } from 'lucide-react';

const links: { icon: React.ReactElement; text: string; href: string }[] = [
  {
    icon: <BookOpen className="size-4" />,
    text: 'Documentation',
    href: 'https://www.promptfoo.dev/docs/intro',
  },
  {
    icon: <GitBranch className="size-4" />,
    text: 'GitHub Repository',
    href: 'https://github.com/however-yir/howeverpromptfoo',
  },
  {
    icon: <Bug className="size-4" />,
    text: 'File an Issue',
    href: 'https://github.com/however-yir/howeverpromptfoo/issues',
  },
  {
    icon: <MessageCircle className="size-4" />,
    text: 'Join Our Discord Community',
    href: 'https://discord.gg/promptfoo',
  },
  {
    icon: <Calendar className="size-4" />,
    text: 'Book a Meeting',
    href: 'https://cal.com/team/promptfoo/intro2',
  },
];

export default function InfoModal<T extends { open: boolean; onClose: () => void }>({
  open,
  onClose,
}: T) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>About howeverpromptfoo</DialogTitle>
          <a
            href="https://github.com/however-yir/howeverpromptfoo/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Version {import.meta.env.VITE_PROMPTFOO_VERSION}
          </a>
        </DialogHeader>
        <DialogDescription>
          howeverpromptfoo is an MIT licensed open-source toolkit for evaluating and red-teaming LLM
          applications. It helps teams track prompt and model quality with repeatable, automated
          checks.
        </DialogDescription>
        <div className="flex flex-col gap-3 mt-2">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 text-sm text-foreground',
                'hover:text-primary transition-colors',
              )}
            >
              {item.icon}
              <span>{item.text}</span>
              <ExternalLink className="size-3 opacity-50 ml-auto" />
            </a>
          ))}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
