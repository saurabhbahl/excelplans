/*Mission Script*/
tinymce.init({
    /*replace textarea having,class.tinymce with tinmce editor*/
    selector: '#mission_area',
    
    /*width and height of editor*/
    width: "100%",
    height: "800",
    
    theme: "modern",
    paste_data_images: true,
    plugins: [
      "advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern table"
    ],
    toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table",
    toolbar2: "print preview media | forecolor backcolor emoticons",
    image_advtab: true,
    branding: false,
    file_picker_callback: function(callback, value, meta) {
      if (meta.filetype == 'image') {
        $('#upload').trigger('click');
        $('#upload').on('change', function() {
          var file = this.files[0];
          var reader = new FileReader();
          reader.onload = function(e) {
            callback(e.target.result, {
              alt: ''
            });
          };
          reader.readAsDataURL(file);
        });
      }
    },

    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#mission-limit").html(text_content.length + " / " + 200000000);
            if (text_content.length > 19999999) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 200000000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});



/*Vision Script*/
tinymce.init({
    selector: '#vision-stat',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    
    
    
    
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#vision-limit").html(text_content.length + " / " + 300);
            if (text_content.length > 299) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 300 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*Company Background Script*/
tinymce.init({
    selector: '#campany-grnd',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#campany-grnd-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Company Ownership*/
tinymce.init({
    selector: '#campany-ownrsp',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#campany-ownrsp-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Goals and Objectives Script*/
tinymce.init({
    selector: '#goals',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#goals-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/* Property Plant And Equipment Script*/
tinymce.init({
    selector: '#prpertyplant',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#prpertyplant-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Products Script*/
tinymce.init({
    selector: '#product',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#product-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Market Target Script*/
tinymce.init({
    selector: '#markt-target',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#markt-target-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Potencial Customers Script*/
tinymce.init({
    selector: '#potencial-custom',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#potencial-custom-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Strenghts And Opertunities Script*/
tinymce.init({
    selector: '#strengths',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#strengths-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Weakneses And Threats Script*/
tinymce.init({
    selector: '#weekness',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#weekness-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Daily Operations Script*/
tinymce.init({
    selector: '#dailyopertion',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#dailyopertion-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Facilities And Wharehousing Script*/
tinymce.init({
    selector: '#facility',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#facility-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Personel Script*/
tinymce.init({
    selector: '#keypersonl',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#keypersonl-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Services Script*/
tinymce.init({
    selector: '#servicd',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#servicd-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Services Script*/
tinymce.init({
    selector: '#executive',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*Background Script*/
tinymce.init({
    selector: '#background_mou',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*Background Script*/
tinymce.init({
    selector: '#purpose_mou',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*reporting Script*/
tinymce.init({
    selector: '#reporting_mou',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});
/*funding Script*/
tinymce.init({
    selector: '#funding_mou',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*duration Script*/
tinymce.init({
    selector: '#duration_mou',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 1699) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 1700 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*duration Script*/
tinymce.init({
    selector: '#mou_preview',
    height: "800",
    plugins: "print",
    menubar: "false",
    toolbar: "print",
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 200) {
                if (e.keyCode != 8) {
                    alert('Cannot edit the generate document');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*defination Script*/
tinymce.init({
    selector: '#definitions_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*Credit Script*/
tinymce.init({
    selector: '#credit_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*Term Script*/
tinymce.init({
    selector: '#term_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

/*consideration Script*/
tinymce.init({
    selector: '#consideration_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#rco_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#warranty_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#termination_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#eot_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#general_nda',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#nda_preview',
    height: "800",
    plugins: "print",
    menubar: "false",
    toolbar: "print",
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 200) {
                if (e.keyCode != 8) {
                    alert('Cannot edit the generate document');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#introduction_pa',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#formation_pa',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#financial_pa',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#management_pa',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#determination_pa',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#general_pa',
    height: "200",
    menubar: false,
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 5000) {
                if (e.keyCode != 8) {
                    alert('You can enter maximum 5000 character.');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});

tinymce.init({
    selector: '#pa_preview',
    height: "800",
    plugins: "print",
    menubar: "false",
    toolbar: "print",
    statusbar: false,
    branding: false,
    forced_root_block: false,
    setup: function (ed) {
        ed.on('change', function (e) {
            ed.save();
        });
        ed.on('KeyDown', function (e) {
            var text_content = $(ed.getBody()).text();
            $("#executive-limit").html(text_content.length + " / " + 1700);
            if (text_content.length > 200) {
                if (e.keyCode != 8) {
                    alert('Cannot edit the generate document');
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                } else {
                    return true;
                }
            }
        });
    },
});




