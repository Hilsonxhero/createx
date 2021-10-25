<?php

namespace App\Notifications;

use App\Models\Post;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CommentRepliedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $post;

    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    public function via($notifiable)
    {
        return !!$notifiable->email_on_reply ? ['mail'] : [];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject("پاسخ جدید")
            ->line('پاسخ جدید دریافت کردید')
            ->action('Notification Action', url("/posts/{$this->post->slug}"));
    }

    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
