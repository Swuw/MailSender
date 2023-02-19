<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArchiveMail extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'archive_mail';
    /**
     * @var mixed
     */
    private $title;
    /**
     * @var mixed
     */
    private $email;
    /**
     * @var mixed
     */
    private $message;
    /**
     * @var false|mixed|string
     */
    private $created_at;
    /**
     * @var false|mixed|string
     */
    private $updated_at;
}

