<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserFollowNotification extends Notification
{
    use Queueable;

    public $user;

    public $text;
    public $link;

    public function __construct(User $user)
    {
        $this->user = $user;
        $this->text = "شما دنبال کننده جدید دارید!";
        $this->link = "/@{$this->user->username}";
    }

    public function via($notifiable)
    {
        return !!$notifiable->email_on_follow ? ['mail', 'database'] : ['database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject($this->text)
            ->line("کاربر {$this->user->name} شما را دنبال می کند");
    }

    public function toArray($notifiable)
    {
        return [
            'text'=> $this->text,
            'link'=> $this->link,
        ];
    }
}
